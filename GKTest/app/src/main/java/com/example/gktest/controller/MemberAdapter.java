package com.example.gktest.controller;

import android.app.Activity;
import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.TextView;

import com.example.gktest.R;
import com.example.gktest.model.Member;

import java.util.ArrayList;

public class MemberAdapter extends BaseAdapter {
    Activity context;
    ArrayList<Member> members;
    private static LayoutInflater inflater = null;
    public MemberAdapter(Activity context, ArrayList<Member> members){
        this.context = context;
        this.members = members;
         }

    @Override
    public int getCount() {
        return members.size();
    }

    @Override
    public Object getItem(int position) {
        return members.get(position);
    }

    @Override
    public long getItemId(int position) {
        return position;
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        ViewHolder holder;

        if (convertView == null) {
            holder = new ViewHolder();
            LayoutInflater inflater = (LayoutInflater) context
                    .getSystemService(Context.LAYOUT_INFLATER_SERVICE);
            convertView = inflater.inflate(R.layout.list_member, null, true);

            holder.tvname = (TextView) convertView.findViewById(R.id.tvName);
            holder.tvage = (TextView) convertView.findViewById(R.id.tvAge);
            holder.tvaddreass = (TextView) convertView.findViewById(R.id.tvAddress);
            convertView.setTag(holder);
        }else {
            holder = (ViewHolder)convertView.getTag();
        }

        holder.tvname.setText("Name: "+members.get(position).getName());
        holder.tvage.setText("Age: "+members.get(position).getAge());
        holder.tvaddreass.setText("Number: "+members.get(position).getAddress());

        return convertView;
    }
    private class ViewHolder {

        protected TextView tvname, tvaddreass, tvage;
    }
}
