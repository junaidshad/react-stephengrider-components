import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
      <div className="ui container comments">
        <ApprovalCard>
          <div>
            <h4>Warning!</h4>
            Are you sure you want to do this?
          </div>
        </ApprovalCard>

        <ApprovalCard>
          <CommentDetail author="Sam" timeAgo="Today at 4:45PM" comment="Great Developer" avatar={faker.image.avatar()}/>
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail author="Edwardo" timeAgo="Today at 3:45AM" comment="I am pleased to collaborate with you" avatar={faker.image.avatar()}/>
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail author="Ericka" timeAgo="Today at 2:00PM" comment="A man with nice sense of humor" avatar={faker.image.avatar()}/>
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail author="Davon" timeAgo="Today at 9:00AM" comment="Recommended for consultation" avatar={faker.image.avatar()}/>
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail author="Albina" timeAgo="Today at 4:00PM" comment="I'm just speechless" avatar={faker.image.avatar()}/>
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail author="Tanya" timeAgo="Today at 5:35PM" comment="Great platform for collaborations" avatar={faker.image.avatar()}/>
        </ApprovalCard>
      </div>
    );
};

ReactDOM.render(<App/>,document.querySelector('#root'));
