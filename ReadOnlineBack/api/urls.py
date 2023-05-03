from django.urls import path, re_path
from api import views

from rest_framework_jwt.views import obtain_jwt_token
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


urlpatterns = [

    path('login/', obtain_jwt_token),

    path('books/', views.book_list),
    path('books/<int:book_id>/', views.book_detail),


    path('authors/', views.author_list),
    path('authors/<int:author_id>/', views.author_detail),


    path('managers/', views.manager_list),
    path('managers/<int:manager_id>/', views.manager_detail),


    # path('products/', views.product_list),
    # path('products/<int:product_id>/', views.product_detail),

    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]