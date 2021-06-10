# import urllib.request 
# import json

# playerids = [3975, 6606, 3945274, 6442, 4277905, 4066259, 4277811, 
# 3468, 2566769, 4279888, 6580, 3064440, 3908809, 3136193, 3917376,
#  4251, 3074752, 2991230, 4395625, 2990984, 4065648, 6450, 3913176, 
#  2991070, 3978, 6430, 6609, 4594268, 4278104, 2595516, 3032977, 
#  4395628, 3064514, 3149673, 3155942, 6440, 3908845, 4066648, 4423545, 3948153,
#  3059318, 3112335, 6478, 4066261, 6477, 3102529, 4278129, 3032976, 2991055,
#  1966, 3202, 3992, 6583, 2779]


# to_write = open('seeddata.json', 'w')
# to_write.write('[')
# to_write.write('\n')

# for playerid in playerids:
#     response = urllib.request.urlopen('https://site.web.api.espn.com/apis/common/v3/sports/basketball/nba/athletes/{playerid}'.format(playerid=playerid))
#     response_string = response.read().decode('utf-8')
#     to_write.write(response_string)
#     to_write.write(',\n')

# to_write.write(']') 
    


# data = response.read()

# with open('seeders.txt', 'w') as f:
#     f.write(output)

# d = json.loads(data.decode("utf-8"))

# info = d["athlete"]


# #ID

# id = (info['id'])
# #PLAYERNAME

# name = info['fullName']

# #POSITION

# position = info['position']['abbreviation']

# #HEADSHOT

# photo = info['headshot']['href']

# #NBATEAM

# print(info["team"]["displayName"])

# #LOGO

# team_photo = info["team"]['logos'][0]['href']

# #PPG
# ppg = info["statsSummary"]['statistics'][0]["displayValue"]

# #RBPG

# rebounds = info["statsSummary"]['statistics'][1]["displayValue"]

# #APG

# assists = info["statsSummary"]['statistics'][2]["displayValue"]

# # lines = ['Readme', 'How to write text files in Python']
# # with open('seeders.txt', 'w') as f:
# #     for line in lines:
# #         f.write(line)
# #         f.write('\n')
# #         f.write('OHHHYEAH')



# databaseentry = '''{id} = Player(name = "{name}", position="{position}", 
#                     ppg = {ppg}, assists = {assists}, rebounds = {rebounds}, 
#                     photo = "{photo}", team_photo = "{team_photo}")
#                     '''.format(id=id, name=name, position=position, ppg=ppg, assists=assists, rebounds=rebounds, photo=photo, team_photo=team_photo)

