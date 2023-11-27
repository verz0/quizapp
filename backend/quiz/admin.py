from django.contrib import admin

# Register your models here.
from .models import *
class QuestionAdmin(admin.ModelAdmin):
    list_display = ('id','question','op1','op2','op3','op4','ans','actual_suggestion', 'misleading_suggestion')
admin.site.register(Question, QuestionAdmin)

class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'roll_no','name','set_attempted')
admin.site.register(User, UserAdmin)

class PromptedAnswersAdmin(admin.ModelAdmin):
    list_display = ('user_id','action','page','time')
admin.site.register(PromptedAnswers, PromptedAnswersAdmin)

class UnpromptedAnswersAdmin(admin.ModelAdmin):
    list_display = ('user_id','action','page','time')
admin.site.register(UnpromptedAnswers, PromptedAnswersAdmin)

class NoAssistanceAnswersAdmin(admin.ModelAdmin):
    list_display = ('user_id','action','page','time')
admin.site.register(NoAssistanceAnswers, NoAssistanceAnswersAdmin)
# class PromptedAdmin(admin.ModelAdmin):
#     list_display = ('question_number','option_click_time','help_button_click_time','continue_button_click_time','time_spent_on_question')
# admin.site.register(Prompted, PromptedAdmin)

# class UnpromptedAdmin(admin.ModelAdmin):
#     list_display = ('question_number','option_click_time','help_button_click_time','continue_button_click_time','time_spent_on_question')
# admin.site.register(Unprompted, UnpromptedAdmin)

# class NoAssistanceAdmin(admin.ModelAdmin):
#     list_display = ('question_number','option_click_time','help_button_click_time','continue_button_click_time','time_spent_on_question')
# admin.site.register(NoAssistance, NoAssistanceAdmin)