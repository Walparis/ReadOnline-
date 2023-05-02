from api.models import Book, Author, Manager
from rest_framework import serializers


class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        field = ('id', 'name')

class BookSerializer2(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ('id', 'author','image', 'title', 'genre', 'description', 'likes', 'cost')

class BookSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    # author = serializers.PrimaryKeyRelatedField(many=True,
    #                                             queryset=Author.objects.all())
    author = serializers.PrimaryKeyRelatedField(queryset=Author.objects.all())
    # author = serializers.IntegerField()
    image = serializers.CharField()
    title = serializers.CharField()
    genre = serializers.CharField()
    description = serializers.CharField()
    likes = serializers.IntegerField()
    cost = serializers.IntegerField()


    class Meta:
        model = Book
        fields = ('id','author', 'image', 'title', 'genre', 'description', 'likes', 'cost')

    def create(self, validated_data):
        pass

    def update(self, instance, validated_data):
        pass


class AuthorSerializer(serializers.Serializer):
    name = serializers.CharField()

    def create(self, validated_data):
        pass

    def update(self, instance, validated_data):
        pass


class ManagerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Manager
        fields = ('id', 'name')