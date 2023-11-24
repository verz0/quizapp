from django.db import models
from django.db.models.deletion import CASCADE
# create models for a quiz app

class Question(models.Model):
    question = models.TextField(null=True)
    op1 = models.CharField(max_length=200,null=True)
    op2 = models.CharField(max_length=200,null=True)
    op3 = models.CharField(max_length=200,null=True)
    op4 = models.CharField(max_length=200,null=True)
    ans = models.CharField(max_length=200,null=True)
    hint = models.TextField(null=True)

    # def __str__(self):
    #     return self.question

class User(models.Model):
    roll_no = models.CharField(max_length=200,unique=True)
    name = models.CharField(max_length=200)
    set_attempted = models.IntegerField(null=False)

class UserAnswers(models.Model):
    user_id = models.IntegerField(null=False)
    question_number = models.ForeignKey(Question, on_delete=models.CASCADE)
    set_attempted = models.IntegerField(null=False)
    option_click_time = models.DurationField()
    help_button_click_time = models.DurationField()
    continue_button_click_time = models.DurationField()
    time_spent_on_question = models.DurationField()
    option_chosen = models.CharField(max_length=1)
    is_correct = models.BooleanField(null=False)

# class Prompted(models.Model):
#     question_number = models.AutoField(primary_key=True)
#     option_click_time = models.DurationField()
#     help_button_click_time = models.DurationField()
#     continue_button_click_time = models.DurationField()
#     time_spent_on_question = models.DurationField()
#     option_chosen = models.JSONField(default=list)

#     # def __str__(self):
#     #     return self.question_number

# class Unprompted(models.Model):
#     question_number = models.AutoField(primary_key=True)
#     option_click_time = models.DurationField()
#     help_button_click_time = models.DurationField()
#     continue_button_click_time = models.DurationField()
#     time_spent_on_question = models.DurationField()
#     option_chosen = models.JSONField(default=list)
    
# class NoAssistance(models.Model):
#     question_number = models.AutoField(primary_key=True)
#     option_click_time = models.DurationField()
#     help_button_click_time = models.DurationField()
#     continue_button_click_time = models.DurationField()
#     time_spent_on_question = models.DurationField()
#     option_chosen = models.JSONField(default=list)

# class Misleading(models.Model):
#     question_number = models.AutoField(primary_key=True)
#     option_click_time = models.DurationField()
#     help_button_click_time = models.DurationField()
#     continue_button_click_time = models.DurationField()
#     time_spent_on_question = models.DurationField()
#     option_chosen = models.JSONField(default=list)