import { Component, OnInit } from '@angular/core';
import {PublisherService} from '../services/publisher/publisher.service';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.css']
})
export class PublisherComponent implements OnInit {
  public publishers: [] |any;
  name: string;
  address: string;
  constructor(private publisherService: PublisherService) { }
  getPublishers(): any {
    this.publisherService.getPublishers().subscribe(response => {
      this.publishers = response;
    }, err => console.log(err));
  }
  createPublisher(): any{
    const newPublisher = {
      name: this.name,
      address: this.address
    };
    this.publisherService.createPublisher(newPublisher).subscribe(response => {
      this.publishers = [...this.publishers, response];
    }, err => console.log(err));
  }

  ngOnInit(): void {
    this.getPublishers();
  }

}
