import { Component, ViewChild, ElementRef } from '@angular/core';
// import * as anime from 'animejs';
import anime from 'animejs';
import   {flip}  from 'number-flip';
import{NativePageTransitions,NativeTransitionOptions} from '@ionic-native/native-page-transitions/ngx';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild('box') box: ElementRef;
  @ViewChild('numberbtn', { read: ElementRef }) private btn: ElementRef;
  flipAnim = null;
  constructor(private pageTransition:NativePageTransitions,public navCtrl: NavController,private router:Router) { }
  callAnime() {
    anime({
      targets: '.animate-me',
      translateX: [
        { value: -100, duration: 1200 },
     
      ],
      translateY: [
        { value: -190, duration: 1200 },
   
      ],
      rotate: '0turn',
      backgroundcolor: '#35489',
      duration: 2000
    });
  }
  doMagic() {
    this.box.nativeElement.classList.add('magictime');
    this.box.nativeElement.classList.add('foolishIn');
  }
  flip() {
    if (!this.flipAnim) {
      this.flipAnim = new flip({
        node: this.btn.nativeElement,
        from: '9999'
      })
    }
this.flipAnim.flipTo( ({
  to:Math.floor((Math.random() *1000)+1)
}))
  }
  animateItems() {


  }
  bounce() {

  }
  transition(){
    // let options:NativeTransitionOptions={
    //   direction:'left',
    //   duration:400,
    //   slowdownfactor:-1,
    //   iosdelay:50
    // }
    let options: NativeTransitionOptions = {
      duration: 700
    };
    this.pageTransition.fade(options);
    this.navCtrl.navigateRoot('home');
    // this.navCtrl.setRoot('SecondPage');
  }
}
