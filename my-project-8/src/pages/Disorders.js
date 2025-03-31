import Grid from '../components/Grid.js';
import sleepapnea from '../images/sleep_apnea_disorder_img.jpg';
import insomnia from '../images/insomnia_disorder_img.jpg';
import narcolepsy from '../images/narcolepsy_disorder_img.jpg';
import restlesslegs from '../images/restless_leg_disorder_img.jpg';
import shiftwork from '../images/shift_work_disorder_img.jpg';
import delayedsleep from '../images/delayed_sleep_disorder_img.jpg';
import remdisorder from '../images/rem_disorder_img.jpg';
import idiopathichypersomnia from '../images/idiopathic_hypersomnia.jpeg';
import parasomnia from '../images/parasomnias_disorder_img.jpg';

const Disorders = () => {
    return (
        <main>
            <h2>Sleep-Wake Disorders</h2>
            <p>Sleep-wake disorders involve problems with the amount, quality, and timing of sleep, which can impair daily functioning.
                These disorders fall under six major types: insomnia, or the ability to fall and stay asleep; sleep apnea, which affects sleep quality and oxygen levels; circadian rhythm disorders, which regulate what time one falls asleep at; movement disorders, which make it impossible to stay still at night; parasomnias, which are uncontrollable sleep episodes; and hypersomnia, or sleeping too often.
                There are over 80 different sleep-wake disorders, but the most common are the ones listed below.
                Click on a disorder to find out more about it.</p>
            <div id="grid" class="grid">
                <Grid name="Sleep Apnea"
                image={sleepapnea}/>
                <Grid name="Insomnia"
                image={insomnia}/>
                <Grid name="Narcolepsy"
                image={narcolepsy}/>
                <Grid name="Restless Legs Syndrome"
                image={restlesslegs}/>
                <Grid name="Shift Work Sleep Disorder"
                image={shiftwork}/>
                <Grid name="Delayed Sleep Phase Syndrome"
                image={delayedsleep}/>
                <Grid name="REM Sleep Behavior Disorder"
                image={remdisorder}/>
                <Grid name="Idiopathic Hypersomnia"
                image={idiopathichypersomnia}/>
                <Grid name="Parasomnias"
                image={parasomnia}/>
            </div>
        </main>
    );
  };
  
  export default Disorders;