import { Component, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
declare var google;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
map;
latitude:any;
longitude:any;
@ViewChild('mapElement') mapElement:ElementRef;
  constructor(private geolocation:Geolocation) {}

  ngAfterContentInit(): void {
    this.geolocation.getCurrentPosition().then((res)=>{
      this.latitude=res.coords.latitude;
      this.longitude=res.coords.longitude;
      console.log(this.latitude);
      console.log(this.longitude);
      this.map= new google.maps.Map(
        this.mapElement.nativeElement,{
          center :{lat:-33.5211474 ,lng:-74.0889964},
          zoom:4
        }
      )
      // const infoWindow= new google.maps.infoWindow;
      const pos={
        lat:this.latitude,
        lng:this.longitude
      }
      const icon={
        url:'../../assets/icon/mapicon.png',
        scaledSize: new google.maps.Size(50,50),
      }
     
      // const marker= new google.maps.Marker({
      //   position:pos,
      //   map:this.map,
      //   title:'hello',
      //   icon:icon
      // })
      const contentString = '<div id="content">' +
      '<div id="siteNotice">' +
      '</div>' +
      '<h1 id="firstHeading" class="firstHeading">Test</h1>' +
      '<div id="bodyContent">' +
      '<img src="../../assets/icon/mapicon.png" width="200">' +
      '<p><b>Test</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
      'sandstone rock formation in the southern part of the ' +
      'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) ' +
      'south west of the nearest large town, Alice Springs; 450&#160;km ' +
      '(280&#160;mi) by road. Kata Tjuta and Test are the two major ' +
      'features of the Test - Kata Tjuta National Park. Test is ' +
      'sacred to the Pitjantjatjara and Yankunytjatjara, the ' +
      'Aboriginal people of the area. It has many springs, waterholes, ' +
      'rock caves and ancient paintings. Test is listed as a World ' +
      'Heritage Site.</p>' +
      '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
      'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
      '(last visited June 22, 2009).</p>' +
      '</div>' +
      '</div>';
      var locations = [
        [contentString, 33.5211474, 74.0889964, 4],
        [contentString, 33.522222, 75.2222, 5],
        [contentString, 33.111111, 73.55555, 3],
        [contentString, -33.80010128657071, 151.28747820854187, 2],
        [contentString, -33.950198, 151.259302, 1]
      ];
      var  i;

      for (i = 0; i < locations.length; i++) {  
      var  markeri = new google.maps.Marker({
          position: new google.maps.LatLng(locations[i][1], locations[i][2]),
          map: this.map,
          icon:icon
        });
        var content  = "" + "hello"
        var infowindow = new google.maps.InfoWindow({
          content: contentString,
            maxWidth: 400
        });
        google.maps.event.addListener(markeri, 'click', ((markeri,content,infowindow)=> {
          return ()=> {
            // infowindow.setContent(content);
            infowindow.open(this.map, markeri);
          }
        })(markeri, content,infowindow));
      }
      
   
  
      // const infowindow = new google.maps.InfoWindow({
      //   content: contentString,
      //   maxWidth: 400
      // });
      // marker.addListener('click', function() {
      //   infowindow.open( this.map, marker);
      // });
      this.map.setCenter(pos);
    }).catch((error) => {
      console.log('Error getting location', error);
    })
      // infoWindow.setPosition(pos);
      // infoWindow.setContent('Current Location');
      // infoWindow.open(this.map);
    
    // }).catch((error)=>{
    //   console.log(error);
    // })
   
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
 
  }
}
