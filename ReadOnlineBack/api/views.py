
from django.shortcuts import render
import json
from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse






from api import serializers
from api.models import Book, Author, Manager

# CRUD - CRATE, READ, UPDATE, DELETE
from api.serializers import AuthorSerializer, ManagerSerializer, BookSerializer, BookSerializer2


# Create your views here.


@csrf_exempt
def book_list(request):
    if request.method == 'GET':
        books = Book.objects.all()

        serializer = BookSerializer2(books, many=True)

        return JsonResponse(serializer.data, safe=False)
    if request.method == 'POST':
        data = json.loads(request.body)
        image = data.get('image')
        author = data.get('author')
        title = data.get('title')
        genre = data.get('genre')
        description = data.get('description')
        likes = data.get('likes')
        cost = data.get('cost')

        # serializer = AuthorSerializer(author_obj, many=True)
        # author_obj_json = [a.to_json for a in author_obj]
        # serializer = BookSerializer(books, many=True)
        author_obj = Author.objects.get(id=author["id"], name=author['name'])
        book = Book.objects.create(author=author_obj, image=image, title=title, genre=genre, description=description,
                                   likes=likes,
                                   cost=cost)

        return JsonResponse(book.to_json(), safe = False)



@csrf_exempt
def book_detail(request, book_id):
    try:
        book = Book.objects.get(id=book_id)
    except Book.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)
    if request.method == 'GET':

        return JsonResponse(book.to_json(), safe = False)

    elif request.method == 'PUT':
        data = json.loads(request.body)
        new_cost = data.get('cost', book.cost)

        # desc = data.get('desc', category.desc)
        book.cost = new_cost
        book.save()
        return JsonResponse(book.to_json())
    elif request.method == 'DELETE':
        book.delete()
        return JsonResponse({'deleted': True})


def author_list(request):
    authors = Author.objects.all()
    authors_json = [a.to_json() for a in authors]
    return JsonResponse(authors_json, safe=False)


def author_detail(request, author_id):
    try:
        author = Author.objects.get(id=author_id)
    except Author.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    return JsonResponse(author.to_json())


def manager_list(request):
    managers = Manager.objects.all()
    managers_json = [a.to_json() for a in managers]
    return JsonResponse(managers_json, safe=False)


def manager_detail(request, manager_id):
    try:
        manager = Manager.objects.get(id=manager_id)
    except Author.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    return JsonResponse(manager.to_json())
