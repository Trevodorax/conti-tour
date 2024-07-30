import { FC } from "react"
import "./Map.css"
import { Map as MapLibreMap } from "react-map-gl/maplibre"
import mapStyle from '/map.json?url';
import { continentId } from "../../pages/landing/components/continentCarousel/ContinentCarousel";

interface zoneSettings {
    initialViewState: {
        longitude: number,
        latitude: number
    },
    // [minX, minY, maxX, maxY]
    maxBounds: [number, number, number, number]
}

const settingsPerContinent: Record<continentId, zoneSettings> = {
    africa: {
        initialViewState: {
            longitude: 19.198608,
            latitude: 5.686367,
        },
        maxBounds: [-23.851563,-38.685510,70.601563,40.044438]
    },
    asia: {
        initialViewState: {
            longitude: 107.579498,
            latitude: 46.064656,
        },
        maxBounds: [23.641602,-14.518369,200.258789,78.637313]
    },
    europe: {
        initialViewState: {
            longitude:9,
            latitude: 55
        },
        maxBounds: [-29.723511,31.786552,43.928833,72.442993]
    },
    "north-america": {
        initialViewState: {
            longitude: -97,
            latitude: 39,
        },
        maxBounds: [-130,10,-50,60]
    },
    "south-america": {
        initialViewState: {
            longitude: -65.978,
            latitude: -14.235,
        },
        maxBounds: [-92.800827,-57.984444,-24.421921,22.431975],
    },
    oceania: {
        initialViewState: {
            longitude: 134.491,
            latitude: -25.732,
        },
        maxBounds: [89.890137,-55.028809,192.546387,3.424321]
    }
}

interface Props {
    continent: continentId
}

export const Map: FC<Props> = ({continent}) => {
    const settings = settingsPerContinent[continent]

    return (
        <MapLibreMap
            initialViewState={{...settings.initialViewState, zoom: 0}}
            mapStyle={mapStyle}
            style={{
                width: '100vw',
                height: '100vh'
            }}
            maxBounds={settings.maxBounds}
        />
    )
}
