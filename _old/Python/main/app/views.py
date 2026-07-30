from django.shortcuts import render
from django.utils.translation import ugettext as _

# Create your views here.
def pagina_inicial(request):
    # output = _("Sobre")
    # return render(request, 'index.html', {'Sobre': output})
    return render(request, 'index.html')
