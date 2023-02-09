import * as Mui from '@material-ui/core';

function ProfileInfo () {
    return(
        <div>
            <div>
                <span>
                    {/* <img></img> */}
                </span>
                <h2>LastN, First N</h2>
                <br/>
                <p>Sex:</p>
                <br/>
                <p>Age:</p>
                <br/>
                <p>Doctor:</p>
            </div>
            
            <Mui> container spacing={2}>
                <Grid item xs={6}>
                    <Item>
                        <p>Visit - 00/00/2022</p>
                        <br/>
                        <p>Reason: Pain in Epigastric region</p>
                        <br/>
                        <a href="#">Click for more information</a>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <p>Visit - 12/12/2021</p>
                        <br/>
                        <p>Reason: Something</p>
                        <br/>
                        <a href="#">Click for more information</a>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <p>Visit - 01/11/2020</p>
                        <br/>
                        <p>Reason: Something else</p>
                        <br/>
                        <a href="#">Click for more information</a>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <p>Visit - 02/03/2019</p>
                        <br/>
                        <p>Reason: Leg Fracture</p>
                        <br/>
                        <a href="#">Click for more information</a>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <p>Visit - 03/04/2018</p>
                        <br/>
                        <p>Reason: Pulmonary inflamation</p>
                        <br/>
                        <a href="#">Click for more information</a>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <p>Visit - 06/01/2017</p>
                        <br/>
                        <p>Reason: Depressionn</p>
                        <br/>
                        <a href="#">Click for more information</a>
                    </Item>
                </Grid>
            </Mui>
        </div>
        
    )
}

export default ProfileInfo