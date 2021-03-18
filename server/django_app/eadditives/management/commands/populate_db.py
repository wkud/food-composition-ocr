from django.core.management.base import BaseCommand
from django.utils import timezone
from ...models import Eadditives
import json


class Command(BaseCommand):

    help = "Populate database with initial E-additives data"

    def handle(self, *args, **kwargs):

        with open('data.json') as json_file:
            data = json.load(json_file)

            print(data)

            for additive in data:
                e = Eadditives(code=additive['code'], name=additive['name'])
                e.save()

                print(e)
