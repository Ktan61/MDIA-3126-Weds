"use client"
import {APIProvider, Map, Marker, useMarkerRef} from '@vis.gl/react-google-maps';
import { useEffect } from 'react';

export default function Home() {

  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const [markerRef, marker] = useMarkerRef;

  useEffect{() => {
    if(marker) {
      return;
    }
  }}

  return (
    <>
      <h1>Kathryn's Cool App for MDIA-3126!</h1>
      <APIProvider apiKey={API_KEY}>
        <Map
          style={{width: '100vw', height: '100vh'}}
          defaultCenter={{lat: 49.25082609499164, lng: -123.00033543784244}}
          defaultZoom={15}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
        />
      </APIProvider>
    </>
  )
}