const commentsData= {"mgmtinfo": {
      "comments": [
         {
            "id": "COMMENT1231241212",
            "paraId":1,
            "schema": "http://schemas.pearson.com/wip-authoring/comments/1#/definitions/comments",
            "scope": "global",
            "comment": {
               "schema": "http://schemas.pearson.com/wip-authoring/authoredtext/1#/definitions/authoredtext",
               "text": "Do we really want to use slang here?",
            },
            "category": "qa-content",
            "createdby": "Ankit Gupta",
            "createddate": "2016-12-30T21:00:00Z",
            "status": "open",
            "replies": [{
               "id": "COMMENT123124121",
               "comment": {
                  "schema": "http://schemas.pearson.com/wip-authoring/authoredtext/1#/definitions/authoredtext",
                  "text": "Yes, I think it's appropriate here."
               },
               "createdby": "username2",
               "createddate": "2017-05-19T08:00:00Z"
            },
            {
               "id": "COMMENT123124121",
               "comment": {
                  "schema": "http://schemas.pearson.com/wip-authoring/authoredtext/1#/definitions/authoredtext",
                  "text": "But vulgarity is the last resort of the uneducated."
               },
               "createdby": "anshul mehra",
               "createddate": "2017-05-19T08:13:04Z"
            },
            {
               "id": "COMMENT123124121",
               "comment": {
                  "schema": "http://schemas.pearson.com/wip-authoring/authoredtext/1#/definitions/authoredtext",
                  "text": "Are you calling me uneducated?"
               },
               "createdby": "username2",
               "createddate": "2017-05-19T08:17:04Z"
            },
            {
               "id": "COMMENT123124121",
               "comment": {
                  "schema": "http://schemas.pearson.com/wip-authoring/authoredtext/1#/definitions/authoredtext",
                  "text": "Hey, if the knuckles are draggin'..."
               },
               "createdby": "username1",
               "createddate": "2017-05-19T08:19:34Z"
            }]
         },
         {
            "id": "COMMENT123124123",
             "paraId":0,
            "schema": "http://schemas.pearson.com/wip-authoring/comments/1#/definitions/comments",
            "scope": "global",
            "comment": {
               "schema": "http://schemas.pearson.com/wip-authoring/authoredtext/1#/definitions/authoredtext",
               "text": "Hey, if the knuckles are draggin",
            },
            "category": "qa-content",
            "createdby": "Prakash Singh",
            "createddate": "2017-05-18T21:00:00Z",
            "status": "resolved",
            "replies": []
         },
         {
            "id": "COMMENT1231241214",
             "paraId":2,
            "schema": "http://schemas.pearson.com/wip-authoring/comments/1#/definitions/comments",
            "scope": "local",
            "comment": {
               "schema": "http://schemas.pearson.com/wip-authoring/authoredtext/1#/definitions/authoredtext",
               "text": "Do we really want to use slang here?",
            },
            "category": "qa-content",
            "createdby": "anshul mehra",
            "createddate": "2017-01-08T11:00:00Z",
            "status": "open",
            "replies": [{
               "id": "COMMENT123124121",
               "comment": {
                  "schema": "http://schemas.pearson.com/wip-authoring/authoredtext/1#/definitions/authoredtext",
                  "text": "Yes, I think it's appropriate here."
               },
               "createdby": "username2",
               "createddate": "2017-05-19T08:00:00Z"
            },
            {
               "id": "COMMENT123124121",
               "comment": {
                  "schema": "http://schemas.pearson.com/wip-authoring/authoredtext/1#/definitions/authoredtext",
                  "text": "But vulgarity is the last resort of the uneducated."
               },
               "createdby": "username1",
               "createddate": "2017-05-19T08:13:04Z"
            },
            {
               "id": "COMMENT123124121",
               "comment": {
                  "schema": "http://schemas.pearson.com/wip-authoring/authoredtext/1#/definitions/authoredtext",
                  "text": "Are you calling me uneducated?"
               },
               "createdby": "username2",
               "createddate": "2017-05-19T08:17:04Z"
            },
            {
               "id": "COMMENT123124121",
               "comment": {
                  "schema": "http://schemas.pearson.com/wip-authoring/authoredtext/1#/definitions/authoredtext",
                  "text": "Hey, if the knuckles are draggin'..."
               },
               "createdby": "username1",
               "createddate": "2017-05-19T08:19:34Z"
            }]
         },
         {
            "id": "COMMENT123124128",
             "paraId":1,
            "schema": "http://schemas.pearson.com/wip-authoring/comments/1#/definitions/comments",
            "scope": "global",
            "comment": {
               "schema": "http://schemas.pearson.com/wip-authoring/authoredtext/1#/definitions/authoredtext",
               "text": "Please add a glossary definition for ‘Stomata’ and ensure this is in the end of chapter Flashcard deck.",
            },
            "category": "qa-content",
            "createdby": "Magic Sw",
            "createddate": "2017-04-18T21:00:00Z",
            "status": "open",
            "replies": []
         },
         {
            "id": "COMMENT123124129",
             "paraId":2,
            "schema": "http://schemas.pearson.com/wip-authoring/comments/1#/definitions/comments",
            "scope": "local",
            "comment": {
               "schema": "http://schemas.pearson.com/wip-authoring/authoredtext/1#/definitions/authoredtext",
               "text": "Fusce dictum odio eu metus mollis fermentum. Sed non nulla erat. Praesent dictum nec metus sit amet imperdiet. Morbi laoreet tristique mi eget congue. Duis commodo fringilla pulvinar. Cn",
            },
            "category": "qa-content",
            "createdby": "Raman Raghav",
            "createddate": "2017-02-01T21:00:00Z",
            "status": "resolved",
            "replies": [{
               "id": "COMMENT123124121",
               "comment": {
                  "schema": "http://schemas.pearson.com/wip-authoring/authoredtext/1#/definitions/authoredtext",
                  "text": "Yes, I think it's appropriate here."
               },
               "createdby": "username2",
               "createddate": "2017-05-19T08:00:00Z"
            }]
         }


      ]
   }
}

class CommentsApi {
  static getAllCommentsData() {
    return new Promise((resolve, reject) => {
        resolve(Object.assign([], commentsData.mgmtinfo.comments));
    });
  }

  static createComment(comment) {
    let getcomment = Object.assign({}, comment); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
       let commentsDataArray=commentsData.mgmtinfo.comments.slice();
       commentsDataArray.push(comment); 
       resolve(comment);
       
    });
  }
  static editComment(comment) {
    return new Promise((resolve, reject) => {
         comment = Object.assign({}, comment);
         let arr=commentsData.mgmtinfo.comments.slice()
         
         const existingCourseIndex = arr.findIndex(a => a.id == comment.id);
         arr.splice(existingCourseIndex, 1, comment);
          resolve(comment);
    });
    // return [
    //     ...state.filter(comment => comment.id !== action.comment.id),
    //     Object.assign({}, action.comment)
    //   ];

  }
 
  static deleteUserComment(deleteId, createdUser) {
    return new Promise((resolve, reject) => {
        let arr=commentsData.mgmtinfo.comments.slice()
        const deleteIndex = arr.findIndex(a => a.id == deleteId);
        
       arr.splice(deleteIndex,1);
        resolve(deleteId);
    });
  }
  static saveUserReply(reply,commentId) {
      let arr=commentsData.mgmtinfo.comments
      let index=null
      for(var i=0;i<arr.length;i++){
         if(arr[i].id==commentId){
            index=i
         }
      }
    return new Promise((resolve, reject) => {
      let replyDataArray=commentsData.mgmtinfo.comments[index].replies
      replyDataArray.push(reply);
    });
  }
  static changeCommentStatus(ticketStatus,commentId) {
      let arr=commentsData.mgmtinfo.comments.slice()
    const changeIndex = arr.findIndex(a => a.id == commentId);
    return new Promise((resolve, reject) => {
         let replyDataArray=commentsData.mgmtinfo.comments[changeIndex]
          replyDataArray['status']=ticketStatus;
         resolve(replyDataArray);
    });
  }

}

export default CommentsApi;