import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
    selector: 'math-jax',
    templateUrl: './math-jax.component.html',
    styleUrls: ['./math-jax.component.css']
})
export class MathjaxComponent implements OnChanges, OnInit {
    @Input() content: string = '';

    constructor(public cs: ConfigService) { }
    mathJaxObject: any;

    ngOnChanges(changes: SimpleChanges) {
        // to render math equations again on content change
        if (changes['content']) {
            this.renderMath()
        }
    }

    ngOnInit() {
        this.loadMathConfig()
        this.renderMath();
    }

    updateMathObt() {
        this.mathJaxObject = this.cs.nativeGlobal()['MathJax'];
    }

    renderMath() {
        this.updateMathObt();
        let angObj = this;
        setTimeout(() => {
            angObj.mathJaxObject['Hub'].Queue(["Typeset", angObj.mathJaxObject.Hub], 'mathContent');
        }, 1000)
    }
    loadMathConfig() {
        this.updateMathObt();
        this.mathJaxObject.Hub.Config({
            showMathMenu: false,
            tex2jax: { inlineMath: [["$", "$"]], displayMath: [["$$", "$$"]] },
            menuSettings: { zoom: "Double-Click", zscale: "150%" },
            CommonHTML: { linebreaks: { automatic: true } },
            "HTML-CSS": { linebreaks: { automatic: true } },
            SVG: { linebreaks: { automatic: true } }
        });
    }
}