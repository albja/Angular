import { Component, Input } from '@angular/core';
import { Skill } from 'src/model/skill.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
})
export class SkillComponent {
  @Input() skill: Skill = new Skill(
    'Ruby',
    'https://e7.pngegg.com/pngimages/980/847/png-clipart-ruby-on-rails-logo-programming-language-rubygems-ruby-angle-design-thumbnail.png',
    'https://www.ruby-lang.org/fr/'
  );
}