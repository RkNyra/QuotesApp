export class Quote {
  constructor(public quote: string,public author: string,public submittedBy: string,public date: Date,public upvote?: number,public downvote?: number ) {
  }
}