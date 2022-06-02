import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import Typography from '@mui/material/Typography';
import PostAddIcon from '@mui/icons-material/PostAdd';
import './addEvaluation.css';
import { Button } from "react-bootstrap";

class AddEvaluation extends Component{

    render(){
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
                        <Button style={{color: 'black', float:'inline-end', fontSize:'10px', marginTop:'20px'}} variant="primary" as={Link}
                            to="/addevaluation">
                            Marking Schemes &gt;&gt;
                        </Button> 
                    </p>
                    <form>
                        <div class="form-group">
                            <label for="groupid">Group ID</label>
                            <input type="text" class="form-control" id="groupid" placeholder="GRP_123_SE" />
                        </div>
                        <div class="form-group">
                            <label for="type">Evaluation Type</label>
                            <select type='text' class="form-control" id="type" name='type'>
                                <option value="" disabled selected>Select the evaluation type</option>
                                {options.map((option) => (
                                    <option value={option.value}>{option.label}</option>
                                ))}
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="groupmark">Group Mark</label>
                            <input type="text" class="form-control" id="groupmark" placeholder="100" />
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="leaderNo">Reg. No (Group Leader)</label>
                                <input type="text" class="form-control" id="leaderNo" placeholder="IT12345678" />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="leadermark">Mark (Group Leader)</label>
                                <input type="text" class="form-control" id="leadermark" placeholder="100" />
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="memberTwoNo">Reg. No (Member Two)</label>
                                <input type="text" class="form-control" id="memberTwoNo" placeholder="IT12345678" />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="memberTwoMark">Mark (Member Two)</label>
                                <input type="text" class="form-control" id="memberTwoMark" placeholder="100" />
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="memberThreeNo">Reg. No (Member Three)</label>
                                <input type="text" class="form-control" id="memberThreeNo" placeholder="IT12345678" />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="memberThreeMark">Mark (Member Three)</label>
                                <input type="text" class="form-control" id="memberThreeMark" placeholder="100" />
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="memberFourNo">Reg. No (Member Four)</label>
                                <input type="text" class="form-control" id="memberFourNo" placeholder="IT12345678" />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="memberFourMark">Mark (Member Four)</label>
                                <input type="text" class="form-control" id="memberFourMark" placeholder="100" />
                            </div>
                        </div>     
                        <div class="form-group">
                            <label for="comments">Comments</label>
                            <textarea class="form-control" id="comments" rows="3"></textarea>
                        </div>
                        <button type="submit" class="btn btn-outline-danger">Clear</button>
                        <button type="submit" class="btn btn-primary complete-btn">Complete Evaluation</button>
                    </form>
                </div>
            </div>
        );
    }

}

export default AddEvaluation;