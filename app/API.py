import urllib.request 
import json

response = urllib.request.urlopen('https://site.web.api.espn.com/apis/common/v3/sports/basketball/nba/athletes/3992')

data = response.read()

d = json.loads(data.decode("utf-8"))

info = d["athlete"]


#ID

id = (info['id'])
#PLAYERNAME

name = info['fullName']

#POSITION

position = info['position']['abbreviation']

#HEADSHOT

photo = info['headshot']['href']

#NBATEAM

print(info["team"]["displayName"])

#LOGO

team_photo = info["team"]['logos'][0]['href']

#PPG
ppg = info["statsSummary"]['statistics'][0]["displayValue"]

#RBPG

rebounds = info["statsSummary"]['statistics'][1]["displayValue"]

#APG

assists = info["statsSummary"]['statistics'][2]["displayValue"]

# lines = ['Readme', 'How to write text files in Python']
# with open('seeders.txt', 'w') as f:
#     for line in lines:
#         f.write(line)
#         f.write('\n')
#         f.write('OHHHYEAH')



databaseentry = '''{id} = Player(name = "{name}", position="{position}", 
                    ppg = {ppg}, assists = {assists}, rebounds = {rebounds}, 
                    photo = "{photo}", team_photo = "{team_photo}")
                    '''.format(id=id, name=name, position=position, ppg=ppg, assists=assists, rebounds=rebounds, photo=photo, team_photo=team_photo)

with open('seeders.txt', 'w') as f:
    f.write(databaseentry)