import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'add-question',
    templateUrl: './add-question.component.html',
    styles: ['./add-question.component.css']
})

export class AddQuestionComponent implements OnInit {
    mathContent: string = `$$ x = {-6 \\pm \\sqrt{(-6)^2 - 4 (1)(4)} \\over (2 * 1)} $$

    $$ ax^2 + bx + c = 0 $$
    
    $$ x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$$`

    ngOnInit(): void {

    }
}