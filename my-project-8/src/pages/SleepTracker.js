const SleepTracker = () => {
    return (
        <main>
        <h2>What Types of Symptoms Are There?</h2>
        <p>Sleep-wake disorders can have a variety of symptoms, but there are a number of common ones. 
            Some of the common sleep-wake disorder symptoms are: excessive daytime sleepiness, trouble falling asleep, atypical breathing patterns, feeling an urge to move that is uncomfortable when trying to sleep, moving too much while asleep, or other unusual activities like sleepwalking, sleep-eating, or sleep paralysis.
            These symptoms can impair daily functioning and can worsen both mental and physical health. 
        </p>
        <p>If you notice pattern of sleep-wake disorder symptoms, schedule a visit with your primary care provider.
            They will be able to refer you to a sleep clinician, who can order several diagnostic tests like a polysomnography, an electroencephalogram, or a multiple sleep latency test.
            These tests will help determine the cause of your symptoms and the best course of treatment.
        </p>
        <h2 id="symptom_title">Add a Sleep Symptom...</h2>
        <div id="symptom_form">
            <div id="symptom_text">
            <h5>Symptom:</h5>
            <select name="symptoms" id="symptoms_dropdown">
                <option value="Symptom A">Symptom A</option>
                <option value="Symptom B">Symptom B</option>
                <option value="Symptom C">Symptom C</option>
                <option value="Symptom D">Symptom D</option>
            </select>
            <h5>Duration:</h5>
            <input type="text" id="duration_box" name="duration_box"/>
            <h5>Time of Day:</h5>
            <div class="slide_container">
                <input type="range" min="0" max="23" value="12" class="slider" id="time_range"/>
            </div>
            <h5>Restfulness:</h5>
            <div class="slide_container">
                <input type="range" min="1" max="10" value="5" class="slider" id="restfulness_range"/>
            </div>
            <h5>Notes:</h5>
            <textarea id="notes" name="notes" rows="6" cols="30">Please log any other notes here.</textarea>
            </div>
        </div>
    </main>
    );
  };
  
  export default SleepTracker;