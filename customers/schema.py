import graphene
from graphene_django import DjangoObjectType
from graphql import GraphQLError
from django.db.models import Q
from graphql_jwt.decorators import login_required
import django_filters

from .models import Customer
from users.schema import UserType


#########
# Types #
#########

class CustomerType(DjangoObjectType):
    class Meta:
        model = Customer

###########
# Queries #
###########

class CustomerFilter(django_filters.FilterSet):
    class Meta:
        model = Customer
        fields = ["id","name","business_name","created_at"]

class Query(graphene.ObjectType):
    customer = graphene.Field(CustomerType, lookup_id=graphene.String(required=True))
    customers = graphene.List(CustomerType)

    @login_required
    def resolve_customer(self, info, lookup_id, **kwargs):
        """
        Return a single customer.
        """
        cust = Customer.objects.filter(lookup_id=lookup_id).first()
        return cust

    @login_required
    def resolve_customers(self, info, search=None, first=None, skip=None, **kwargs):
        """
        Return a list of customers according to search parameters. By default it returns ALL.
        """
        qs = Customer.objects.all()

        if search:
            filter = (
                Q(url__icontains=search) |
                Q(description__icontains=search)
            )
            qs = qs.filter(filter)

        if skip:
            qs = qs[skip:]
        
        if first:
            qs = qs[:first]

        return qs


#############
# Mutations #
#############

class CreateCustomer(graphene.Mutation):
    created_by = graphene.Field(UserType)
    customer = graphene.Field(CustomerType)

    class Arguments:
        name = graphene.String()
        business_name = graphene.String()
        phone_number = graphene.String()
        email = graphene.String()
        website = graphene.String()
        description = graphene.String()

    @login_required
    def mutate(self, info, name, business_name, phone_number, email, website, description):
        user = info.context.user

        cust = Customer(
            name=name,
            business_name=business_name,
            phone_number=phone_number,
            email=email,
            website=website,
            description=description,
            created_by=user
        )
        cust.save()
        return CreateCustomer(customer=cust)


class Mutation(graphene.AbstractType):
    create_customer = CreateCustomer.Field()