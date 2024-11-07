from rest_framework import serializers
from authentication.models import User
from django.contrib import auth
from rest_framework.exceptions import AuthenticationFailed

class RegisterSerializer(serializers.ModelSerializer):
  password = serializers.CharField(max_length=68, min_length=6, write_only=True)

  class Meta:
    model = User
    fields = ['email', 'username', 'password']

  def validate(self, attrs):
    username = attrs.get('username', '')

    if not username.isalnum():
      raise serializers.ValidationError('Имя пользователя должен содержать только буквы и цифры')

    return attrs

  def create(self, validated_data):
    return User.objects.create_user(**validated_data)

class LoginSerializer(serializers.ModelSerializer):
  email = serializers.EmailField(max_length=255, min_length=3)
  password = serializers.CharField(max_length=68, min_length=6, write_only=True)
  username = serializers.CharField(max_length=255, read_only=True)
  tokens = serializers.SerializerMethodField()

  def get_tokens(self, obj):
    user = User.objects.get(email=obj['email'])

    return {
      'refresh': user.tokens()['refresh'],
      'access': user.tokens()['access']
    }

  class Meta:
    model = User
    fields = ['email', 'password', 'username', 'tokens']
  
  def validate(self, attrs):
    email = attrs.get("email", '')
    password = attrs.get("password", '')
    
    user = auth.authenticate(email=email, password=password)

    if not user:
      raise AuthenticationFailed('Неправильный пароль или email!')

    return {
      'email': user.email,
      'username': user.username,
      'tokens': user.tokens 
    }    
