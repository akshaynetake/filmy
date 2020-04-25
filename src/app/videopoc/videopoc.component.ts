import { Component, OnInit, ViewChild } from "@angular/core";
import { BitrateOption, VgAPI } from 'videogular2/compiled/core';
import { TimerObservable } from 'rxjs/observable/TimerObservable';
import { Subscription } from 'rxjs';
import { IDRMLicenseServer } from 'videogular2/compiled/streaming';
import { VgDASH } from 'videogular2/compiled/src/streaming/vg-dash/vg-dash';
import { VgHLS } from 'videogular2/compiled/src/streaming/vg-hls/vg-hls';

export interface IMediaStream {
  type: 'vod' | 'dash' | 'hls';
  source: string;
  label: string;
  token?: string;
  licenseServers?: IDRMLicenseServer;
}


@Component({
  selector: 'app-videopoc',
  templateUrl: './videopoc.component.html',
  styleUrls: ['./videopoc.component.css']
})
export class VideopocComponent implements OnInit {
  @ViewChild(VgDASH) vgDash: VgDASH;
  @ViewChild(VgHLS) vgHls: VgHLS;

  currentStream: IMediaStream;
  api: VgAPI;

  bitrates: BitrateOption[];

  streams: IMediaStream[] = [
      {
          type: 'hls',
          label: 'HLS: Streaming',
          source: 'http://filmystations.com/uploads/streams/batman/index.m3u8'
      }
  ];

  constructor() {
  }

  onPlayerReady(api: VgAPI) {
      this.api = api;
  }

  ngOnInit() {
      this.currentStream = this.streams[ 0 ];
  }

  setBitrate(option: BitrateOption) {
      console.log('option: ', option);
      switch (this.currentStream.type) {
          case 'dash':
              this.vgDash.setBitrate(option);
              break;

          case 'hls':
              console.log('here i am');
              this.vgHls.setBitrate(option);
              break;
      }
  }

  setGBitrates(bitrates){
    console.log('bitrates11: ', bitrates);
    this.bitrates = bitrates

  }
  onClickStream(stream: IMediaStream) {
      console.log('stream: ', stream);
      this.api.pause();
      this.bitrates = null;

      let timer: Subscription = TimerObservable.create(0, 10).subscribe(
          () => {
              this.currentStream = stream;
              timer.unsubscribe();
          }
      );
  }

}
