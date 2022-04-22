import React, { Component } from "react";
import uniqid from "uniqid";
import Overview from "./components/Overview";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: {
        name: "",
        email: "",
        phone: "",
        schoolName: "",
        studyTitle: "",
        studyDate: "",
        companyName: "",
        positionTitle: "",
        tasksName: "",
        companyWorkFrom: "",
        companyWorTill: "",

        id: uniqid()
      },
      infos: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  // input event function
  handleChange(e) {
    this.setState({
      info: {
        name: e.target.value,
        email: e.target.value,
        phone: e.target.value,
        schoolName: e.target.value,
        studyTitle: e.target.value,
        studyDate: e.target.value,
        companyName: e.target.value,
        positionTitle: e.target.value,
        tasksName: e.target.value,
        companyWorkFrom: e.target.value,
        companyWorkTill: e.target.value,

        id: this.state.info.id
      }
    });
  }

  // submit event function
  onSubmitForm = (e) => {
    e.preventDefault();
    this.setState({
      infos: this.state.infos.concat(this.state.info),
      info: {
        name: "",
        email: "",
        phone: "",
        schoolName: "",
        studyTitle: "",
        studyDate: "",
        companyName: "",
        positionTitle: "",
        tasksName: "",
        companyWorkFrom: "",
        companyWorkTill: "",

        id: uniqid()
      }
    });
  };

  render() {
    const { info, infos } = this.state;

    return (
      <div className="wrapper">
        <form onSubmit={this.onSubmitForm}>
          <fieldset>
            <h1>CV Generator</h1>
            <section className="appSection">
              <h3>General Information</h3>
              {/* User Name */}
              <label htmlFor="UserName">Name</label>
              <input
                type="text"
                id="UserName"
                value={info.name}
                onChange={this.handleChange}
              />
              {/* Email */}
              <label htmlFor="UserEmail">Email</label>
              <input
                type="text"
                id="UserEmail"
                value={info.email}
                onChange={this.handleChange}
              />
              {/* Phone number */}
              <label htmlFor="UserPhone">Phone Number</label>
              <input
                type="text"
                id="UserPhone"
                value={info.phone}
                onChange={this.handleChange}
              />
              {/* buttons */}
              <button>EDIT</button>
              <button type="submit">SUBMIT</button>
            </section>
            <section>
              <h3>Education</h3>
              {/* School name */}
              <label htmlFor="schoolName">School Name</label>
              <input
                type="text"
                id="schoolName"
                value={info.schoolName}
                onChange={this.handleChange}
              />
              {/* Title of Study */}
              <label htmlFor="studyTitle">Title of Study</label>
              <input
                type="text"
                id="studyTitle"
                value={info.studyTitle}
                onChange={this.handleChange}
              />
              {/* Date of study */}
              <label htmlFor="studyDate">Date of Study</label>
              <input
                type="text"
                id="studyDate"
                value={info.studyDate}
                onChange={this.handleChange}
              />
              {/* buttons */}
              <button>EDIT</button>
              <button type="submit">SUBMIT</button>
            </section>
            <section>
              <h3>Work Experience</h3>
              {/* Company Name */}
              <label htmlFor="companyName">Company Name</label>
              <input
                type="text"
                id="companyName"
                value={info.companyName}
                onChange={this.handleChange}
              />
              {/* Position title */}
              <label htmlFor="positionTitle">Position Title</label>
              <input
                type="text"
                id="positionTitle"
                value={info.positionTitle}
                onChange={this.handleChange}
              />
              {/* Main tasks of your jobs */}
              <label htmlFor="tasksName">Tasks Name</label>
              <input
                type="text"
                id="tasksName"
                value={info.tasksName}
                onChange={this.handleChange}
              />
              {/* Company- date from */}
              <label htmlFor="companyWorkFrom">Company Work From</label>
              <input
                type="date"
                id="companyWorkFrom"
                value={info.companyWorkFrom}
                onChange={this.handleChange}
              />
              {/* Company- date till */}
              <label htmlFor="companyWorTill">Company Work Till</label>
              <input
                type="date"
                id="companyWorkTill"
                value={info.companyWorkTill}
                onChange={this.handleChange}
              />
              {/* buttons */}
              <button>EDIT</button>
              <button type="submit">SUBMIT</button>
            </section>
          </fieldset>
        </form>
        <Overview infos={infos} />
      </div>
    );
  }
}

export default App;
