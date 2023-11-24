from rest_framework import serializers
from .models import Question

class QuestionSerializer(serializers.ModelSerializer):
    options = serializers.SerializerMethodField()

    class Meta:
        model = Question
        fields = ('id', 'question', 'options', 'hint')

    def get_options(self, obj):
        return [obj.op1, obj.op2, obj.op3, obj.op4]