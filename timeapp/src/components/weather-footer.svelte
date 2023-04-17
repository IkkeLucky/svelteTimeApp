<script>
    import {getWeatherFrom} from '../services/weather.js';
    const weatherPromise = getWeatherFrom();
</script>


<style>
    footer {
        border: 2px solid #000;
        padding: 12px 32px;
        width: 80%;
        margin: 0 auto;
        border-radius: 10px;
        display: flex;
        text-align: center;
        justify-content: space-evenly;
        position: absolute;
        bottom: 32px;
        left: 0;
        right: 0;
    }

    span {
        display: block;
        font-weight: 600;
        font-size: 14px;
    }

    strong{
        color: #444;
        font-size: 14px;
        font-weight: 500;
    }
</style>


{#await weatherPromise then weather }
<footer>
    <div>
        <span>
            {weather.humidity}
        </span>
        <strong>
            Humidity
        </strong>
    </div>

    <div>
        <span>
            {weather.windSpeed}
        </span>
        <strong>
            Windspeed
        </strong>
    </div>

    <div>
        <span>
            {weather.feelsLike}
        </span>
        <strong>
            Feels Like
        </strong>
    </div>
</footer>
{/await}

