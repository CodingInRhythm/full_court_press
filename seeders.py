# import json
# # lines = ['Readme', 'How to write text files in Python']
# # with open('seeders.txt', 'a') as f:
# #     for line in lines:
# #         f.write(line)
# #         f.write('\n')
# # print(type(open('seederslooptest.json')))
# # with json.loads(open("seederslooptest.json")) as f:
# #     first_line = f.readline()
# #     print(type(f))
# #     print(first_line)

# players = []
# listOfPlayerObjects = json.loads(open('seeddata.json').read()) # we wrote it as JSON so we can loads it as JSON
# print(listOfPlayerObjects)


# print(listOfPlayerObjects[0])
# for player_obj in listOfPlayerObjects:
#     info = player_obj["athlete"]
#     player = Player(
#         name=info['fullName'],
#         position=info['position']['abbreviation'],
#         photo=info['headshot']['href'],
#         team_photo= info['team']['logos'][0]['href'],
#         nba_team=info['team']['displayName'],
#         ppg = info["statsSummary['statistics"][0]['displayValue'],
#         rebounds = info["statsSummary['statistics"][1]['displayValue'],
#         assists = info["statsSummary['statistics"][2]['displayValue'], 
#     )
#     db.session.add(player)


# # #ID

# # id = (info['id'])
# # #PLAYERNAME

# # name = info['fullName']

# # #POSITION

# # position = info['position']['abbreviation']

# # #HEADSHOT

# # photo = info['headshot']['href']

# # #NBATEAM

# # print(info["team"]["displayName"])

# # #LOGO

# # team_photo = info["team"]['logos'][0]['href']

# # #PPG
# # ppg = info["statsSummary"]['statistics'][0]["displayValue"]

# # #RBPG

# # rebounds = info["statsSummary"]['statistics'][1]["displayValue"]

# # #APG

# # assists = info["statsSummary"]['statistics'][2]["displayValue"]

# # # lines = ['Readme', 'How to write text files in Python']
# # # with open('seeders.txt', 'w') as f:
# # #     for line in lines:
# # #         f.write(line)
# # #         f.write('\n')
# # #         f.write('OHHHYEAH')



# # databaseentry = '''{id} = Player(name = "{name}", position="{position}", 
# #                     ppg = {ppg}, assists = {assists}, rebounds = {rebounds}, 
# #                     photo = "{photo}", team_photo = "{team_photo}")
# #                     '''.format(id=id, name=name, position=position, ppg=ppg, assists=assists, rebounds=rebounds, photo=photo, team_photo=team_photo)