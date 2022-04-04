#include<bits/stdc++.h>
using namespace std;
int main(){
    string s;
    cin>>s;
    int ct=0;
    vector<string>v;
    for(int i=0;i<s.size();i++){
        for(int j=1;j<=s.size()-i;j++){
            string r=s.substr(i,j);
            v.push_back(r);
        }
    }
    for(int i=0;i<v.size();i++){
        if(v[i].size()==1){
            cout<<v[i]<<endl;
            ct++;
        }
    }

}