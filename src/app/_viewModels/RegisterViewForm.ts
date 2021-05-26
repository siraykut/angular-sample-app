import {Gender} from '../_models/Gender';
import {City} from '../_models/City';

export class RegisterViewForm{
  Genders: Gender[] = [];
  Cities: City[] = [];
  Name!: string;
  LastName!: string;
  Description!: string;
}
