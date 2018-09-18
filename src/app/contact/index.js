import React, { Component } from 'react'; 

import Form from '../shared/FormContainer';
import Link from '../shared/Link';
import NavBar from '../nav'
import { PageContainer } from '../shared/PageContainer'

class ContactUs extends Component {
  state = {
    name: "",
    topic: "",
    comment: "",
    mission_values: [],
    invalid_submission: false,
    submitted: false
  }

  handleNameInput = (e) => {
    this.setState({ invalid_submission: false, name: e.target.value });
  }

  handleTopicInput = (e) => {
      this.setState({ invalid_submission: false, topic: e.target.value });
  }

  handleCommentInput = (e) => {
    this.setState({ invalid_submission: false, comment: e.target.value });
  }

  handleSubmit = () => {
    const missing_values = [];

    if (this.state.name === "") {
        missing_values.push("Name");
    }
    if (this.state.topic === "") {
        missing_values.push("Topic");
    }
    if (this.state.comment === "") {
        missing_values.push("Comment");
    }

    if (missing_values.length !== 0) {
        this.setState({ invalid_submission: true, missing_values })
      } else {
        this.setState({ submitted: true })
      }
  }

  configureDisplay = () => {
      if (this.state.submitted) {
        return (
            <React.Fragment>
                <h1>
                    Thank you for your question. We'll get back to you as soon as possible!
                </h1>

                <Form.Button>
                    <Link to="/">Go Home</Link>
                </Form.Button>
                
            </React.Fragment>

        )
      }

      return (
        <React.Fragment>
            <h1>You have questions? We're here to answer!</h1>
            <input 
                type="text" 
                placeholder="Name" 
                onChange={ e => this.handleNameInput(e)}/>
            <input 
                type="text" 
                placeholder="Topic" 
                onChange={e => this.handleTopicInput(e)}/>
            <input 
                type="textbox" 
                placeholder="Comment" 
                onChange={e => this.handleCommentInput(e)}/>

            {
            (this.state.invalid_submission? 
                <Form.ErrorMessage>
                    Missing values: {this.state.missing_values.join(', ')}
                </Form.ErrorMessage> : null)
            }
            <Form.Button onClick={this.handleSubmit}>
            Submit
            </Form.Button>
        </React.Fragment>
      )
  }

  render() {
    return (
    <PageContainer>
        <NavBar/>
        <Form.PageContainer>
        <Form.FormContainer>
            {this.configureDisplay()}
        </Form.FormContainer>
      </Form.PageContainer>
    </PageContainer>

    );
  }
}

export default ContactUs;