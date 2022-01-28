import { BookService } from './../book.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,FormControl} from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  public bookForm! : FormGroup ;
  constructor(private service : BookService,private formBuilder :FormBuilder) { }
  
  ngOnInit(): void {
    this.init();
  }

  private init() : void{
    this.bookForm =  this.formBuilder.group({
      title :[],
      description:[]
    })
  }
  public saveBook(): void {
      this.service.AddBook(this.bookForm.value).subscribe(data =>alert(`Book is added with Id ${data}`))
  }

}
