import express from "express";

// const express = require("express")
import path from "path";
const publicfolder_Path: string = path.join(__dirname, '../../public');
import publicroutes from "../../public";

module.exports = (app: { use: (arg0: string, arg1: any) => void; }) =>
{
    publicroutes.forEach((publicroute: string) =>
    {
        app.use(`/${publicroute}`, express.static(publicfolder_Path + `/${publicroute}`));
    });
    // app.use('/MediaUploads', express.static(__dirname + '/MediaUploads'));
};