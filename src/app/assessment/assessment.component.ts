import { QuizService } from './../services/quiz.service';
import { HelperService } from './../services/helper.service';
import { Component, OnInit } from '@angular/core';
import { Option, Question, Quiz, QuizConfig } from '../models/index';
let positive = 0;
@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css'],
  providers: [QuizService]
})

export class AssessmentComponent implements OnInit {
  quizes !: any[];
  quiz: Quiz = new Quiz(null);
  mode = 'quiz';
  quizName !: string;
  config: QuizConfig = {
    'allowBack': false,
    'allowReview': true,
    'autoMove': true,  // if true, it will move to next question automatically when answered.
    'duration': 600,  // indicates the time (in secs) in which quiz needs to be completed. 0 means unlimited.
    'pageSize': 1,
    'requiredAll': true,  // indicates if you must answer all the questions before submitting.
    'richText': false,
    'shuffleQuestions': true,
    'shuffleOptions': false,
    'showClock': false,
    'showPager': true,
    'theme': 'none'
  };

  pager = {
    index: 0,
    size: 1,
    count: 1
  };
  timer: any = null;
  startTime !: Date;
  endTime !: Date;
  ellapsedTime = '00:00';
  duration = '';
  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.quizes = this.quizService.getAll();
    this.quizName = this.quizes[0].id;
    this.loadQuiz(this.quizName);
    if(this.quizes[0]){
    
    }
  }
  loadQuiz(quizName: string): void {
    this.quizService.get(quizName).subscribe(res => {
      this.quiz = new Quiz(res);
      this.pager.count = this.quiz.questions.length;
      this.startTime = new Date();
      this.ellapsedTime = '00:00';
      this.timer = setInterval(() => { this.tick(); }, 1000);
      this.duration = this.parseTime(this.config.duration);
    });
    this.mode = 'quiz';
  }

  tick(): void {
    const now = new Date();
    const diff = (now.getTime() - this.startTime.getTime()) / 1000;
    if (diff >= this.config.duration) {
      this.onSubmit();
    }
    this.ellapsedTime = this.parseTime(diff);
  }

  parseTime(totalSeconds: number): string {
    let mins: string | number = Math.floor(totalSeconds / 60);
    let secs: string | number = Math.round(totalSeconds % 60);
    mins = (mins < 10 ? '0' : '') + mins;
    secs = (secs < 10 ? '0' : '') + secs;
    return `${mins}:${secs}`;
  }

  get filteredQuestions() {
    return (this.quiz.questions) ?
      this.quiz.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
  }

  onSelect(question: Question, option: Option): void {
    if (question.questionTypeId === 1) {
      question.options.forEach((x) => { if (x.id !== option.id) x.selected = false; });
    }

    if (this.config.autoMove) {
      setTimeout(() => { this.goTo(this.pager.index + 1); }, 500);
    }
  }

  goTo(index: number): void {
    if (index >= 0 && index < this.pager.count) {
      this.pager.index = index;
      this.mode = 'quiz';
    }
  }

  isAnswered(question: Question): string {
    return question.options.find(x => x.selected) ? 'Answered' : 'Not Answered';
  }
  
  isCorrect(question: Question) {
    if(question.options.every(x => x.selected === x.isAnswer)){
     return positive = positive + 1;
}
    return question.options.every(x => x.selected === x.isAnswer) ? 'correct' : 'wrong';
  };

  onSubmit(): void {
    let answers = [];
   
    this.quiz.questions.forEach(x => answers.push({ 'quizId': this.quiz.id, 'questionId': x.id, 'answered': x.answered }));
    
    // Post your data to the server here. answers contains the questionId and the users' answer.
    
    this.mode = 'result';
  }
  
  onPositive(): number {
    return (positive >= 6) ? 1 : 0;
  }
}