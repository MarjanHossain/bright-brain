import { teamData } from "../../../assets/data";
import { team1, team2, team3, team4 } from "../../../assets/image";
import TeamCard from "./TeamCard";

const Team = () => {
    return (
        <section id="team" className="team">

            <div className="container" data-aos="fade-up">

                <header className="section-header">
                    <h2>Team</h2>
                    <p>Our hard working team</p>
                </header>

                <div className="row gy-4">
                    {
                        teamData.map((teamInfo, i) => <TeamCard key={i} teamInfo={teamInfo} />)
                    }

                </div>

            </div>

        </section>
    );
};

export default Team;