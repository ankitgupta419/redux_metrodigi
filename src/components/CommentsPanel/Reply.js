import React, {PropTypes} from 'react';
const Reply = ({replyContent}) => {
  return (
   		<div className="userCommentRepliesContainer">
			{
				replyContent.map((commentData,index)=>
					<div className="userCommentReplyView" key={index}>
        				<div className="userCommentReplyNumber">Reply # {index + 1}</div>
        				<div className="userCommentReplySummary">{commentData.comment.text}</div>
        				<div className="clr"></div>
        			</div>
				)		
					
			}
		</div>
  );
};

Reply.propTypes = {
  replyContent: PropTypes.array.isRequired
};

export default Reply;