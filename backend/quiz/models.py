from django.db import models
from django.db.models.deletion import CASCADE

# create models for a quiz app


class Question(models.Model):
    id = models.AutoField(primary_key= True)
    question = models.TextField(null=True)
    op1 = models.CharField(max_length=200, null=True)
    op2 = models.CharField(max_length=200, null=True)
    op3 = models.CharField(max_length=200, null=True)
    op4 = models.CharField(max_length=200, null=True)
    ans = models.CharField(max_length=200, null=True)
    actual_suggestion = models.TextField(null=True)
    misleading_suggestion= models.TextField(null=True)


class User(models.Model):
    roll_no = models.CharField(max_length=200, unique=True)
    name = models.CharField(max_length=200)
    set_attempted = models.IntegerField(null=False)


class PromptedAnswers(models.Model):
    user_id = models.IntegerField(null=False)
    action = models.CharField(
        choices=[
            ("A", "A"),
            ("B", "B"),
            ("C", "C"),
            ("D", "D"),
            ("Start", "Start"),
            ("End", "End"),
            ("Prompt", "Prompt"),
            ("Continue", "Continue"),
        ],
        default="Null",
        max_length=10,
    )
    page = models.CharField(null=False, max_length=200, default="Null")
    time = models.TimeField(default='00:00:00')

class PromptedAnswers(models.Model):
    user_id = models.IntegerField(null=False)
    action = models.CharField(
        choices=[
            ("A", "A"),
            ("B", "B"),
            ("C", "C"),
            ("D", "D"),
            ("Start", "Start"),
            ("End", "End"),
            ("Prompt", "Prompt"),
            ("Continue", "Continue"),
        ],
        default="Null",
        max_length=10,
    )
    page = models.CharField(null=False, max_length=200, default="Null")
    time = models.TimeField(default='00:00:00')

class PromptedAnswers(models.Model):
    user_id = models.IntegerField(null=False)
    action = models.CharField(
        choices=[
            ("A", "A"),
            ("B", "B"),
            ("C", "C"),
            ("D", "D"),
            ("Start", "Start"),
            ("End", "End"),
            ("Prompt", "Prompt"),
            ("Continue", "Continue"),
        ],
        default="Null",
        max_length=10,
    )
    page = models.CharField(null=False, max_length=200, default="Null")
    time = models.TimeField(default='00:00:00')

class UnpromptedAnswers(models.Model):
    user_id = models.IntegerField(null=False)
    action = models.CharField(
        choices=[
            ("A", "A"),
            ("B", "B"),
            ("C", "C"),
            ("D", "D"),
            ("Start", "Start"),
            ("End", "End"),
            ("Prompt", "Prompt"),
            ("Continue", "Continue"),
        ],
        default="Null",
        max_length=10,
    )
    page = models.CharField(null=False, max_length=200, default="Null")
    time = models.TimeField(default='00:00:00')

class NoAssistanceAnswers(models.Model):
    user_id = models.IntegerField(null=False)
    action = models.CharField(
        choices=[
            ("A", "A"),
            ("B", "B"),
            ("C", "C"),
            ("D", "D"),
            ("Start", "Start"),
            ("End", "End"),
            ("Continue", "Continue"),
        ],
        default="Null",
        max_length=10,
    )
    page = models.CharField(null=False, max_length=200, default="Null")
    time = models.TimeField(default='00:00:00')

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
