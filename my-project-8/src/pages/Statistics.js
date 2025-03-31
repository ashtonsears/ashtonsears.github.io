import chart from '../images/sample_chart_img.png';

const Statistics = () => {
    return (
        <main>
        <h2 id="stats_title">Your Sleep Statistics...</h2>
        <div id="calendar">
            <div class="month">
                <ul>
                    <li class="prev">&#10094;</li>
                    <li class="next">&#10095;</li>
                    <li><strong>February</strong></li>
                    <li>2025</li>
                </ul>
            </div>
        <ul class="weekdays">
            <li>Sun</li>
            <li>Mon</li>
            <li>Tues</li>
            <li>Wed</li>
            <li>Thurs</li>
            <li>Fri</li>
            <li>Sat</li>
        </ul>
        <ul class="days">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
            <li>11</li>
            <li>12</li>
            <li>13</li>
            <li>14</li>
            <li>15</li>
            <li class="active">16</li>
            <li>17</li>
            <li>18</li>
            <li>19</li>
            <li>20</li>
            <li>21</li>
            <li>22</li>
            <li>23</li>
            <li>24</li>
            <li>25</li>
            <li>26</li>
            <li>27</li>
            <li>28</li>
        </ul>
    </div>
    <div class="flex-container">
        <section class="statcol1of2">
            <h4>Average Sleep Duration:</h4>
            <input type="text" id="avg_duration_box" name="avg_duration_box"/>
            <h4>Average Restfulness:</h4>
            <input type="text" id="restfulness_box" name="restfulness_box"/>
        </section>
        <section class="statcol1of2">
            <h4>Average Number of Symptoms:</h4>
            <input type="text" id="num_symptom_box" name="num_symptom_box"/>
            <h4>Most Common Symptom:</h4>
            <input type="text" id="common_symptom_box" name="common_symptom_box"/>
        </section>
    </div>
    <h3>Average Daily Sleep for <span id="js_month">February</span></h3>
    <div class="chart">
        <img id="sample_chart" width="700" height="400" src={chart} alt="Sample Chart of Average Daily Sleep"/>
    </div>
    </main>
    );
  };
  
  export default Statistics;