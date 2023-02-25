from django.urls import path
from . import views

urlpatterns = [
    path('', views.members, name='members'),
    path('register/', views.RegisterUser.as_view(), name='reg'),
    path('creaet_saving_account/', views.SavingAccountView.as_view(), name='savingAccount'),
    path('fetch_saving_account/', views.Checksavingaccountuser.as_view(), name='getsavingAccount'),
]   