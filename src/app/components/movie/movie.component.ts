import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls:['./movie.component.css']
})
export class MovieComponent  implements OnInit {
  @Input() movie:any;

  ngOnInit() {
    $('li.ratings').on("mouseover",function(){
        let id = $("li").index($(this));
        let base = $("li").index($(this).parent().children().eq(0));

        /** refresh and update ratings */
        for(let i = 0; i<=4;i++)
            $(this).parent().children().eq(i).html("&#9734;");
        for(let i = 0; i<=id-base;i++)
            $(this).parent().children().eq(i).html("&#9733;");
    })

    $('li.ratings').on("mouseout",function(){
        /** restore prev ratings */
        let prev_ratings = $(this).parent().attr('id')-1;
        console.log(prev_ratings);
        for(let i = 0; i<=prev_ratings;i++)
            $(this).parent().children().eq(i).html("&#9733;");
        for(let i = prev_ratings+1; i<=4;i++)
            $(this).parent().children().eq(i).html("&#9734;");
    })
    
    $('li.ratings').on("click",function(){
        /** restore prev ratings */
        let id = $("li").index($(this));
        let base = $("li").index($(this).parent().children().eq(0));
        let prev_ratings = $(this).parent().attr('id',id-base+1);

    })

  }
}
