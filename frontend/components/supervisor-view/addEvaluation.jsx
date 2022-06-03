import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import Typography from '@mui/material/Typography';
import PostAddIcon from '@mui/icons-material/PostAdd';
import './addEvaluation.css';
import { Button } from "react-bootstrap";
import axios from "axios";
import {Link as RouterLink} from 'react-router-dom';

class AddEvaluation extends Component{

    constructor(props){
        super(props)

        this.state={
            groupid:'',
            evaluationtype:'',
            groupmark:'',
            groupleaderid:'',
            groupleadermark:'',
            membertwoid:'',
            membertwomark:'',
            memberthreeid:'',
            memberthreemark:'',
            memberfourid:'',
            memberfourmark:'',
            comments:'',
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        console.log(this.state)
        e.preventDefault()
        axios.post('http://localhost:4000/evaluations', this.state, {})
            .then(response => {
                console.log(response);
                alert('Evaluation added successfully!');
                window.location.href = '/addevaluation'
            })
            .catch(error => {
                console.error(error);
                alert('An error occured')
            })
    }

    clearAll = () => {
        document.getElementById("evaluationForm").reset();
    }

    render(){
        const { groupid, evaluationtype, groupmark, groupleaderid, groupleadermark, membertwoid, membertwomark, memberthreeid, memberthreemark, memberfourid, memberfourmark, comments } = this.state;

        const options = [
            { label: 'Viva', value: 'Viva' },
            { label: 'Presentation Slides', value: 'Presentation Slides' },
            { label: 'Charter', value: 'Charter' },
            { label: 'Final Report', value: 'Final Report' },
        ]; 
        return(
            <div>
                <Breadcrumbs className="breadcrumb" aria-label="breadcrumb">
                    <Link
                        underline="hover"
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="inherit"
                        href="/supervisordashboard"
                    >
                        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        Dashboard
                    </Link>
                    <Typography
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="text.primary"
                    >
                        <PostAddIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        Evaluations
                    </Typography>
                </Breadcrumbs>
                <div className="container">
                    <p className="group-txt">Add Evaluations
                        <Button style={{ color: 'black', float: 'inline-end', fontSize: '10px', marginTop: '20px' }} variant="primary" as={RouterLink}
                            to="/markingSchemes">
                            Marking Schemes &gt;&gt;
                        </Button> 
                    </p>
                    <form id="evaluationForm" onSubmit={this.handleSubmit}>
                        <div class="form-group">
                            <label for="groupid">Group ID</label>
                            <input type="text" class="form-control" id="groupid" placeholder="GRP_123_SE" name='groupid' value={groupid} onChange={this.handleChange} required />
                        </div>
                        <div class="form-group">
                            <label for="evaluationtype">Evaluation Type</label>
                            <select type='text' class="form-control" id="evaluationtype" name='evaluationtype' value={evaluationtype} onChange={this.handleChange}>
                                <option value="" disabled selected>Select the evaluation type</option>
                                {options.map((options) => (
                                    <option value={options.value}>{options.label}</option>
                                ))}
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="groupmark">Group Mark</label>
                            <input type="text" class="form-control" id="groupmark" placeholder="100" name='groupmark' value={groupmark} onChange={this.handleChange} required />
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="groupleaderid">Reg. No (Group Leader)</label>
                                <input type="text" class="form-control" id="groupleaderid" placeholder="IT12345678" name='groupleaderid' value={groupleaderid} onChange={this.handleChange} required />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="groupleadermark">Mark (Group Leader)</label>
                                <input type="text" class="form-control" id="groupleadermark" placeholder="100" name='groupleadermark' value={groupleadermark} onChange={this.handleChange} required />
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="membertwoid">Reg. No (Member Two)</label>
                                <input type="text" class="form-control" id="membertwoid" placeholder="IT12345678" name='membertwoid' value={membertwoid} onChange={this.handleChange} required />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="membertwomark">Mark (Member Two)</label>
                                <input type="text" class="form-control" id="membertwomark" placeholder="100" name='membertwomark' value={membertwomark} onChange={this.handleChange} required />
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="memberthreeid">Reg. No (Member Three)</label>
                                <input type="text" class="form-control" id="memberthreeid" placeholder="IT12345678" name='memberthreeid' value={memberthreeid} onChange={this.handleChange} required />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="memberthreemark">Mark (Member Three)</label>
                                <input type="text" class="form-control" id="memberthreemark" placeholder="100" name='memberthreemark' value={memberthreemark} onChange={this.handleChange} required />
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="memberfourid">Reg. No (Member Four)</label>
                                <input type="text" class="form-control" id="memberfourid" placeholder="IT12345678" name='memberfourid' value={memberfourid} onChange={this.handleChange} required />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="memberfourmark">Mark (Member Four)</label>
                                <input type="text" class="form-control" id="memberfourmark" placeholder="100" name='memberfourmark' value={memberfourmark} onChange={this.handleChange} required />
                            </div>
                        </div>     
                        <div class="form-group">
                            <label for="comments">Comments</label>
                            <textarea class="form-control" id="comments" rows="3" name='comments' value={comments} onChange={this.handleChange} require></textarea>
                        </div>
                        <button type="submit" class="btn btn-outline-danger" onClick={() => this.clearAll()}>Clear</button>
                        <button type="submit" class="btn btn-primary complete-btn">Complete Evaluation</button>
                    </form>
                </div>
            </div>
        );
    }

}

export default AddEvaluation;