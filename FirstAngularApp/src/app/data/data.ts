import { Article } from '../models/article.model';
import { data } from './seed';

export class ArticleData {
    getData() : Article[] {
        
        return data;
    }
}