#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Jun 29 12:54:48 2019

@author: riv
"""
import json

merge = []
def create_json(status, shipmentList):
    merge.append("{clusterlabel:'"+status+"'")
    merge.append("Id:'"+status+"'")
    inside =[]
    for i in range(0, len(shipmentList)):
        inside.append("{shipmentId:'"+shipmentList[i][:-1]+"'")
        inside.append("orders:[{orderId:'"+ "'},{orderId:'".join(shipmentToOrderDetails[shipmentList[i]])+"'}]")
        inside.append("stops:[{label:'" + "'},{label:'".join(shipmentToOrderMovement[shipmentList[i]])+"'}]}")
    inside[0] = "shipments: ["+ inside[0]
    merge.append(','.join(inside))
    merge[-1] = merge[-1] + "]}"
    
    
    
    
fo = open("cluster_merge.log")
lines = fo.readlines()
shipmentToOrderDetails = {}
shipmentToOrderMovement = {}

for i in range(0, len(lines)):
    ##STATUS=2 / STATUS_FAILURE
    if "BEGIN|MSTOP_PAIRABLE" in lines[i]:
        merge_try =[]
        while("END|MSTOP_PAIRABLE" not in lines[i]):
            print(lines[i])
            if("ENTITY|SHIPMENT" in lines[i]):
                start = lines[i].find("Shipment")
                end = lines[i].find("(")
                shipmentId = lines[i][start:end]
                stopsStart = lines[i].find("(")
                stopsEnd = lines[i].find(")")
                stops = (lines[i][stopsStart+1:stopsEnd]).split('->')
                ordersStart = lines[i].find("containing orders:")
                orders = ((lines[i][ordersStart:]).split('|'))[1:-1]
                shipmentToOrderDetails[shipmentId] = list()
                shipmentToOrderDetails[shipmentId] = orders
                shipmentToOrderMovement[shipmentId] = list()
                shipmentToOrderMovement[shipmentId] = stops
                merge_try.append(shipmentId)
            i = i + 1
        create_json("FAILURE", merge_try)

        print(lines[i])
    ##STATUS=1 / STATUS_SUCCESS
    if "BEGIN|MSTOP_CREATE_SHIP_PAIR" in lines[i]:
        merge_try = []
        while("END|MSTOP_CREATE_SHIP_PAIR" not in lines[i]):
            print(lines[i])
            if("ENTITY|SHIPMENT" in lines[i]):
                start = lines[i].find("Shipment")
                end = lines[i].find("(")
                shipmentId = lines[i][start:end]
                stopsStart = lines[i].find("(")
                stopsEnd = lines[i].find(")")
                stops = (lines[i][stopsStart+1:stopsEnd]).split('->')
                ordersStart = lines[i].find("containing orders:")
                orders = ((lines[i][ordersStart:]).split('|'))[1:-1]
                shipmentToOrderDetails[shipmentId] = list()
                shipmentToOrderDetails[shipmentId] = orders
                shipmentToOrderMovement[shipmentId] = list()
                shipmentToOrderMovement[shipmentId] = stops
                merge_try.append(shipmentId)
            i = i + 1
        create_json("SUCCESS", merge_try)

        print(lines[i])
out = ','.join(merge)

with open('out2.json', 'w') as json_file:  
    json.dump(out, json_file)

        
    

    
    