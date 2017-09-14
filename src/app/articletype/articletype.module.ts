import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ArticleTypeRouting }       from './articletype.routing';
import { ArticleTypeComponent }     from './articletype.component';
import { ArticleTypeListComponent } from './articletypelist/articletypelist';
import { ArticleTypeListService } from './articletypelist/articletypelist.service';
import { AddArticleTypeComponent }  from './addarticletype/addarticletype';
import { UploadFileModule } from '../../components/upload-file/upload-file.module';

@NgModule({
    imports: [
        FormsModule, ReactiveFormsModule,
        CommonModule,
        ArticleTypeRouting,
        NgZorroAntdModule.forRoot(),
        UploadFileModule
    ],
    declarations: [
        ArticleTypeComponent,
        ArticleTypeListComponent,
        AddArticleTypeComponent,
        // EditBankComponent,
    ],
    providers: [
        ArticleTypeListService,
        // AddBankService,
        // EditBankService,
    ]
})
export class ArticleTypeModule {}
