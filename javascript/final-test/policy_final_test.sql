create table t_policy(
	policy_number serial primary key,
	policy_submit_date date,
	premium int,
	discount int,
	commission int,
	client_number varchar(5),
	agent_code varchar(5),
	policy_status varchar(10),
	policy_due_date date,
	
	constraint t_policy_fk_client_number
	foreign key (client_number)
	references t_client(client_number),
	
	constraint t_policy_fk_agent_code
	foreign key(agent_code)
	references t_agent(agent_code)
)

create table t_agent (
	agent_code varchar(5) primary key,
	agent_name varchar(10),
	agent_office varchar (15),
	basic_commission int
)

create table t_client(
	client_number varchar(5) primary key,
	client_name varchar(20),
	birth_date date
)

insert into t_policy (policy_submit_date, premium, discount, commission, client_number, agent_code, policy_status) values
('1/5/2018', 18600000, 10, 930000, 'CL001', 'AG001', 'INFORCE'),
('1/5/2018', 2500000, 10, 125000, 'CL002', 'AG002', 'INFORCE'),
('1/10/2018', 2500000, 10, 125000, 'CL003', 'AG003', 'TERMINATE'),
('1/25/2018', 4000000, 10, 200000, 'CL003', 'AG002', 'PROPOSAL'),
('1/25/2018', 2625000, 10, 131250, 'CL004', 'AG002', 'PROPOSAL')

insert into t_agent (agent_code, agent_name, agent_office) values
('AG001', 'LIDYA', 'JAKARTA'),
('AG002', 'RUDI', 'BALI'),
('AG003', 'DICKI', 'BALI'),
('AG004', 'DAVID', 'SURABAYA'),
('AG005', 'FARIZ', 'SURABAYA')

insert into t_client (client_number, client_name, birth_date) values
('CL001', 'WAYNE ROONEY', '5/11/1956'),
('CL002', 'RYAN GIGGS', '9/3/1972'),
('CL003', 'DAVID BECKHAM', '9/3/1985'),
('CL004', 'MICHAEL OWEN', '9/3/2012')

-- a
select p.* from t_policy p join t_client c on c.client_number = p.client_number 
where p.policy_submit_date > '2018/01/15' and extract (month from c.birth_date) = 9;

-- b
select p.*, a.agent_office from t_policy p join t_agent a on a.agent_code = p.agent_code
where p.policy_status = 'INFORCE' and a.agent_office = 'JAKARTA'

-- c
create or replace function agentBasicCommission()
returns table (
	agent_code varchar,
	agent_name varchar,
	agent_office varchar,
	basic_commission numeric
) as $$
declare
	rec_agent record;
begin
	for rec_agent in select * from t_policy p join t_agent a on a.agent_code=p.agent_code
	loop
	agent_code := rec_agent.agent_code;
	agent_name := rec_agent.agent_name;
	agent_office := rec_agent.agent_office;
	basic_commission := rec_agent.commission * 100 / rec_agent.premium;
	return next;
	end loop;
end;$$
language plpgsql

select * from agentBasicCommission()

-- d
create or replace procedure policyDueDate()
language plpgsql
as $$
declare
	rec_policy record;
	pol_due_date date;
begin
	for rec_policy in select * from t_policy
	loop
	pol_due_date := rec_policy.policy_submit_date + INTERVAL '30 day';
	update t_policy set policy_due_date = pol_due_date where policy_number = rec_policy.policy_number;
	end loop;
end;$$

call policyDueDate();

select * from t_policy

-- e
create or replace function agentDiscountAsc()
returns table (
	agent_name varchar,
	premium int,
	after_discount int
) as $$
declare 
	rec_data record;
	premium_discount int;
begin
	for rec_data in select * from t_policy p join t_agent a on a.agent_code = p.agent_code
	loop
	premium_discount = rec_data.discount * rec_data.premium / 100;
	agent_name = rec_data.agent_name;
	premium = rec_data.premium;
	after_discount = premium - premium_discount;
	return next;
	end loop;
end;$$
language plpgsql

select * from agentDiscountAsc() where after_discount < 1000000 order by after_discount asc
