from django.db import models


# Create your models here.

class Author(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=1000, default='no descr')

    def __str__(self):
        return f'{self.id}: {self.name}'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description
        }


class Book(models.Model):
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    # author = models.IntegerField()
    image = models.CharField(max_length=1000)
    title = models.CharField(max_length=100)
    genre = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
    likes = models.IntegerField()
    cost = models.IntegerField()

    class Meta:
        verbose_name = 'Book'
        verbose_name_plural = 'Books'

    def __str__(self):
        return f'{self.id}: {self.title}'

    def to_json(self):
        return {
            'id': self.id,
            'author': self.author.to_json(),
            'image': self.image,
            'title': self.title,
            'genre': self.genre,
            'description': self.description,
            'likes': self.likes,
            'cost': self.cost
        }


class Manager(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return f'{self.id}: {self.name}'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }
