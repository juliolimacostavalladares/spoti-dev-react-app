import React from 'react'

import { MainAria, OverFlow } from './style'

import MusicCards from '../MusicCards';

export default function LeftBar() {
    return (
       <MainAria>
           <OverFlow>
            <MusicCards/>
            <MusicCards/>
            <MusicCards/>
            <MusicCards/>
            <MusicCards/>
            <MusicCards/>
            <MusicCards/>
            <MusicCards/>
            <MusicCards/>
            <MusicCards/>
            <MusicCards/>
            <MusicCards/>
           </OverFlow>
           <OverFlow>
           <MusicCards/>
            <MusicCards/>
            <MusicCards/>
            <MusicCards/>
            <MusicCards/>
            <MusicCards/>
           <MusicCards/>
            <MusicCards/>
            <MusicCards/>
            <MusicCards/>
            <MusicCards/>
            <MusicCards/>
           </OverFlow>
           
           
           
       </MainAria>
    );
}