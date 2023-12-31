from django.contrib import admin
from .models import (
    Cargotype, Sku, OrderReceived, Package, PackageRecommended,
    OrderReceivedSku, PackageSelected
)


admin.site.register(
    (Cargotype, Sku, OrderReceived, Package, PackageRecommended,
        OrderReceivedSku, PackageSelected)
)
